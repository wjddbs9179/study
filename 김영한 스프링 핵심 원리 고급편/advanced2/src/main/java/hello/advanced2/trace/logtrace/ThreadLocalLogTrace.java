package hello.advanced2.trace.logtrace;

import hello.advanced2.trace.TraceId;
import hello.advanced2.trace.TraceStatus;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class ThreadLocalLogTrace implements LogTrace{

    private static final String START_PREFIX = "-->";
    private static final String COMPLETE_PREFIX = "<--";
    private static final String EX_PREFIX = "<X-";

    private ThreadLocal<TraceId> traceIdHolder = new ThreadLocal<>(); //traceId 동기화, 동시성 이슈 발생

    @Override
    public TraceStatus begin(String message) {
        syncTraceId();
        TraceId traceId = traceIdHolder.get();
        Long startTimeMs = System.currentTimeMillis();
        log.info("[{}] {}{}",traceId.getId(),addSpace(START_PREFIX,traceId.getLevel()),message);
        return new TraceStatus(traceId,startTimeMs,message);
    }

    private void syncTraceId(){
        if(traceIdHolder.get()==null){
            traceIdHolder.set(new TraceId());
        }else{
            traceIdHolder.set(traceIdHolder.get().createNextId());
        }
    }

    @Override
    public void end(TraceStatus status) {
        complete(status,null);
    }

    @Override
    public void exception(TraceStatus status, Exception e) {
        complete(status,e);
    }


    private static String addSpace(String prefix, int level) {
        StringBuilder sb = new StringBuilder();
        for(int i=0;i<level;i++){
            sb.append((i==level-1)?"|"+prefix:"|   ");
        }
        return sb.toString();
    }

    private void complete(TraceStatus status, Exception e) {
        Long stopTimeMs = System.currentTimeMillis();
        long resultTimeMs = stopTimeMs - status.getStartTimeMs();
        TraceId traceId = status.getTraceId();
        if(e==null){
            log.info("[{}] {}{} time={}ms",traceId.getId(),addSpace(COMPLETE_PREFIX, traceId.getLevel()),status.getMessage(),resultTimeMs);
        }else{
            log.info("[{}] {}{} time={}ms ex={}",traceId.getId(),addSpace(EX_PREFIX, traceId.getLevel()),status.getMessage(),resultTimeMs,e.getClass());
        }

        releaseTraceId();
    }

    private void releaseTraceId() {
        if(traceIdHolder.get().isFirstLevel()){
            traceIdHolder.remove();
        }else{
            traceIdHolder.set(traceIdHolder.get().createPreviousId());
        }
    }
}
