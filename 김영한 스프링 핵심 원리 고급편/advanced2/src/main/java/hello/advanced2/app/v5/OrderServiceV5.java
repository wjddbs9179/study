package hello.advanced2.app.v5;

import hello.advanced2.trace.callback.TraceTemplate;
import hello.advanced2.trace.logtrace.LogTrace;
import hello.advanced2.trace.template.AbstractTemplate;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
public class OrderServiceV5 {

    private final OrderRepositoryV5 orderRepository;
    private final TraceTemplate template;

    public OrderServiceV5(OrderRepositoryV5 orderRepository, LogTrace logTrace) {
        this.orderRepository = orderRepository;
        this.template = new TraceTemplate(logTrace);
    }

    public void orderItem(String itemId){
        template.execute(()->{
            orderRepository.save(itemId);
            return null;
        },"OrderService.orderItem()");
    }
}
