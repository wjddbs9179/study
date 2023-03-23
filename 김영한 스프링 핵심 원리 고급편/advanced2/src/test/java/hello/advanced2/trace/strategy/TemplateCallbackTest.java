package hello.advanced2.trace.strategy;

import hello.advanced2.trace.strategy.code.strategy.ContextV2;
import hello.advanced2.trace.strategy.code.strategy.StrategyLogic1;
import hello.advanced2.trace.strategy.code.strategy.StrategyLogic2;
import hello.advanced2.trace.strategy.code.template.TimeLogTemplate;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;

@Slf4j
public class TemplateCallbackTest {

    /**
     * 템플릿 콜백 패턴 - 익명 내부 클래스
     */
    @Test
    void callbackV1() {
        TimeLogTemplate template = new TimeLogTemplate();
        template.execute(() -> log.info("비즈니스 로직1 실행"));
        template.execute(() -> log.info("비즈니스 로직2 실행"));
    }
}
