package com.feiji.algorithm.webalgorithmstarter.config;

import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

import java.time.Duration;

/**
 * 配置http请求工具的
 */
@Configuration
public class UtilsConfig {
    @Bean
    public RestTemplate restTemplate(RestTemplateBuilder templateBuilder){
        //超时
        templateBuilder.setConnectTimeout(Duration.ofMillis(2000)).setReadTimeout(Duration.ofMillis(500));
        return templateBuilder.build();
    }
}
