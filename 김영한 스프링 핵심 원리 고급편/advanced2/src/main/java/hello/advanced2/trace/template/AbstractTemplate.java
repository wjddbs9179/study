package hello.advanced2.trace.template;

import hello.advanced2.trace.TraceStatus;
import hello.advanced2.trace.logtrace.LogTrace;

public abstract class AbstractTemplate<T> {
    private final LogTrace trace;

    public AbstractTemplate(LogTrace logTrace){
        this.trace = logTrace;
    }

    public T execute(String message){
        TraceStatus status = null;
        try{
            status = trace.begin(message);
            //로직 호출
            T result = call();
            //로직 종료
            trace.end(status);
            return result;
        }catch (Exception e){
            trace.exception(status,e);
            throw e;
        }
    }

    public abstract T call();
}
