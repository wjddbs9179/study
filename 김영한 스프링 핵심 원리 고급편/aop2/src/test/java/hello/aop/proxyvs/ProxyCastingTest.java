package hello.aop.proxyvs;

import hello.aop.member.MemberService;
import hello.aop.member.MemberServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.aop.framework.ProxyFactory;

@Slf4j
public class ProxyCastingTest {

    @Test
    void jdkProxy(){
        MemberServiceImpl target = new MemberServiceImpl();
        ProxyFactory proxyFactory = new ProxyFactory(target);
        proxyFactory.setProxyTargetClass(false); //JDK 동적 프록시
        //프록시를 인터페이스로 캐스팅 성공
        MemberService proxy = (MemberService)proxyFactory.getProxy();
        //프록시를 구체 클래스로 캐스팅 실패
        Assertions.assertThatThrownBy(()-> {MemberServiceImpl memberService = (MemberServiceImpl)proxy;})
                .isInstanceOf(ClassCastException.class);
    }

    @Test
    void cglib(){
        MemberServiceImpl target = new MemberServiceImpl();
        ProxyFactory proxyFactory = new ProxyFactory(target);
        proxyFactory.setProxyTargetClass(true); //JDK 동적 프록시
        //프록시를 인터페이스로 캐스팅 성공
        MemberService proxy = (MemberService)proxyFactory.getProxy();
        //프록시를 구체 클래스로 캐스팅 실패
        MemberServiceImpl memberService = (MemberServiceImpl) proxyFactory.getProxy();
    }
}
