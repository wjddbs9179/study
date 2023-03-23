package hello.proxy.config.v1_proxy;

import hello.proxy.app.v2.OrderControllerV2;
import hello.proxy.app.v2.OrderRepositoryV2;
import hello.proxy.app.v2.OrderServiceV2;
import hello.proxy.config.v1_proxy.concrete_proxy.OrderControllerConcreteProxy;
import hello.proxy.config.v1_proxy.concrete_proxy.OrderRepositoryConcreteProxy;
import hello.proxy.config.v1_proxy.concrete_proxy.OrderServiceConcreteProxy;
import hello.proxy.trace.logtrace.LogTrace;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ConcreteProxyConfig {

    @Bean
    public OrderRepositoryV2 orderRepositoryV2(LogTrace logTrace){
        return new OrderRepositoryConcreteProxy(new OrderRepositoryV2(),logTrace);
    }
    @Bean
    public OrderServiceV2 orderServiceV2(LogTrace logTrace){
        return new OrderServiceConcreteProxy(new OrderServiceV2(orderRepositoryV2(logTrace)),logTrace);
    }
    @Bean
    public OrderControllerV2 orderControllerV2(LogTrace logTrace){
        return new OrderControllerConcreteProxy(new OrderControllerV2(orderServiceV2(logTrace)),logTrace);
    }
}
