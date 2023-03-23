package hello.advanced2.trace.strategy;

import hello.advanced2.trace.strategy.code.strategy.ContextV2;
import hello.advanced2.trace.strategy.code.strategy.StrategyLogic1;
import hello.advanced2.trace.strategy.code.strategy.StrategyLogic2;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;

@Slf4j
public class ContextV2Test {

    @Test
    void strategy() {
        logic1();
        logic2();
    }

    private void logic1() {
        long startTime = System.currentTimeMillis();
        log.info("비즈니스 로직1 실행");
        long endTime = System.currentTimeMillis();
        long resultTime = endTime - startTime;
        log.info("resultTime={}", resultTime);
    }


    private void logic2() {
        long startTime = System.currentTimeMillis();
        log.info("비즈니스 로직2 실행");
        long endTime = System.currentTimeMillis();
        long resultTime = endTime - startTime;
        log.info("resultTime={}", resultTime);
    }

    /**
     * 전략 패턴 사용
     */
    @Test
    void strategyV1() {
        ContextV2 context = new ContextV2();
        context.execute(new StrategyLogic1());
        context.execute(new StrategyLogic2());
    }
    /**
     * 전략 패턴 익명 내부 클래스 - 람다
     */
    @Test
    void strategyV2() {
        ContextV2 context = new ContextV2();
        context.execute(()->log.info("비즈니스 로직1 실행"));
        context.execute(()->log.info("비즈니스 로직2 실행"));
    }

}
