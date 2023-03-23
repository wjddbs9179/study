package hello.advanced2.app.v5;

import hello.advanced2.trace.callback.TraceTemplate;
import hello.advanced2.trace.logtrace.LogTrace;
import hello.advanced2.trace.template.AbstractTemplate;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OrderControllerV5 {
    private final OrderServiceV5 orderService;
    private final TraceTemplate template;

    public OrderControllerV5(OrderServiceV5 orderService, LogTrace logTrace) {
        this.orderService = orderService;
        this.template = new TraceTemplate(logTrace);
    }

    @GetMapping("/v5/request")
    public String request(@RequestParam String itemId) {
        return template.execute(()->{
            orderService.orderItem(itemId);
            return "ok";
        },"OrderController.request()");
    }
}
