package hello.typeconverter.converter;

import hello.typeconverter.type.IpPort;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.*;

public class ConverterTest {

    @Test
    void StringToInteger(){
        StringToIntegerConverter converter = new StringToIntegerConverter();
        Integer result = converter.convert("10");
        assertThat(result).isEqualTo(10);
    }

    @Test
    void IntegerToString(){
        IntegerToStringConverter converter = new IntegerToStringConverter();
        String result = converter.convert(10);
        assertThat(result).isEqualTo("10");
    }

    @Test
    void stringToIpPort(){
        StringToIpPortConverter converter = new StringToIpPortConverter();
        IpPort ipPort = converter.convert("127.0.0.1:8080");
        assertThat(ipPort.getIp()).isEqualTo("127.0.0.1");
        assertThat(ipPort.getPort()).isEqualTo(8080);
    }

    @Test
    void IpPortToString(){
        IpPortToStringConverter converter = new IpPortToStringConverter();
        IpPort ipPort = new IpPort("127.0.0.1",8080);
        String convert = converter.convert(ipPort);
        assertThat(convert).isEqualTo("127.0.0.1:8080");
    }
}
