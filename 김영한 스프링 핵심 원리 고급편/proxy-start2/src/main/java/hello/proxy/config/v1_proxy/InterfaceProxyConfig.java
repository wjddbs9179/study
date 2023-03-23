package hello.proxy.config.v1_proxy;

import hello.proxy.app.v1.*;
import hello.proxy.config.v1_proxy.interface_proxy.OrderControllerInterfaceProxy;
import hello.proxy.config.v1_proxy.interface_proxy.OrderRepositoryInterfaceProxy;
import hello.proxy.config.v1_proxy.interface_proxy.OrderServiceInterfaceProxy;
import hello.proxy.trace.logtrace.LogTrace;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class InterfaceProxyConfig {

    @Bean
    public OrderRepositoryV1 orderRepositoryV1(LogTrace logTrace){
        return new OrderRepositoryInterfaceProxy(new OrderRepositoryV1Impl(),logTrace);
    }

    @Bean
    public OrderServiceV1 orderServiceV1(LogTrace logTrace){
        return new OrderServiceInterfaceProxy(new OrderServiceV1Impl(orderRepositoryV1(logTrace)),logTrace);
    }

    @Bean
    public OrderControllerV1 orderControllerV1(LogTrace logTrace){
        return new OrderControllerInterfaceProxy(new OrderControllerV1Impl(orderServiceV1(logTrace)),logTrace);
    }
}
