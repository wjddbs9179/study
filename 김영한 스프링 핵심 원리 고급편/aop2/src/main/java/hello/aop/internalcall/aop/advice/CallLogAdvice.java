package hello.aop.internalcall.aop.advice;

import hello.aop.internalcall.CallServiceV1;
import lombok.extern.slf4j.Slf4j;
import org.aopalliance.intercept.MethodInterceptor;
import org.aopalliance.intercept.MethodInvocation;

import java.lang.reflect.Method;

@Slf4j
public class CallLogAdvice implements MethodInterceptor {
    @Override
    public Object invoke(MethodInvocation invocation) throws Throwable {
        String packageName = CallServiceV1.class.getPackageName();
        Method method = invocation.getMethod();
        String returnType = method.getReturnType().getSimpleName();
        log.info("aop={}",returnType+" "+packageName+"."+method.getDeclaringClass().getSimpleName()+"."+method.getName()+"()");
        return invocation.proceed();
    }
}
