package hello.advanced2;

import hello.advanced2.trace.logtrace.FieldLogTrace;
import hello.advanced2.trace.logtrace.LogTrace;
import hello.advanced2.trace.logtrace.ThreadLocalLogTrace;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class LogTraceConfig {

    @Bean
    public LogTrace logTrace(){
        return new ThreadLocalLogTrace();
    }
}
