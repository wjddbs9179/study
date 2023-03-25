package hello.aop.internalcall;

import hello.aop.internalcall.aop.CallLogAspect;
import hello.aop.internalcall.aop.advice.CallLogAdvice;
import lombok.extern.slf4j.Slf4j;
import org.aopalliance.aop.Advice;
import org.junit.jupiter.api.Test;
import org.springframework.aop.Advisor;
import org.springframework.aop.aspectj.AspectJExpressionPointcut;
import org.springframework.aop.framework.ProxyFactory;
import org.springframework.aop.support.DefaultPointcutAdvisor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Import;

@Slf4j
//@Import(CallLogAspect.class)
@SpringBootTest
class CallServiceV1Test {

    @Autowired CallServiceV1 callServiceV1;

    @Test
    void external(){
        callServiceV1.external();
    }
    @Test
    void internal(){
        callServiceV1.internal();
    }

    @TestConfiguration
    static class TestConfig{

        @Bean
        public CallServiceV1 callServiceV1(){
            CallServiceV1 target = new CallServiceV1();
            ProxyFactory proxyFactory = new ProxyFactory(target);
            CallLogAdvice callLogAdvice = new CallLogAdvice();
            DefaultPointcutAdvisor advisor = new DefaultPointcutAdvisor(pointcut(), callLogAdvice);
            proxyFactory.addAdvisor(advisor);
            CallServiceV1 proxy = (CallServiceV1) proxyFactory.getProxy();
            target.setCallServiceV1(proxy);
            return proxy;
        }

        private AspectJExpressionPointcut pointcut() {
            AspectJExpressionPointcut pointcut = new AspectJExpressionPointcut();
            pointcut.setExpression("execution(* hello.aop.internalcall..*.*(..))");
            return pointcut;
        }
    }
}