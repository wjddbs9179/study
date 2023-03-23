package hello.proxy.app.v3;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class OrderControllerV3 {
    private final OrderServiceV3 orderService;

    @GetMapping("/v3/request")
    public String request(String itemId){
        orderService.orderItem(itemId);
        return "ok";
    }
    @GetMapping("/v3/no-log")
    public String no_log(){
        return "ok";
    }
}
