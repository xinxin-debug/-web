package com.feiji.algorithm.webalgorithmstarter.handler;

import com.alibaba.fastjson.JSON;
import com.feiji.algorithm.webalgorithmstarter.utils.ApiResult;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class MyAuthenticationFailHandler implements AuthenticationFailureHandler {
    @Override
    public void onAuthenticationFailure(HttpServletRequest httpServletRequest, HttpServletResponse response, AuthenticationException e) throws IOException, ServletException {
        System.out.println("登陆失败");
        response.getWriter().write(JSON.toJSONString(ApiResult.error()));
    }
}
