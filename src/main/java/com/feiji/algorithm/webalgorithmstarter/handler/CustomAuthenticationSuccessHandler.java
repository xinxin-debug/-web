package com.feiji.algorithm.webalgorithmstarter.handler;

import com.alibaba.fastjson.JSON;
import com.feiji.algorithm.webalgorithmstarter.utils.ApiResult;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class CustomAuthenticationSuccessHandler implements AuthenticationSuccessHandler {

    @Override
    public void onAuthenticationSuccess(HttpServletRequest httpServletRequest,
                                        HttpServletResponse response,
                                        Authentication authentication) throws IOException, ServletException {
        System.out.println("----onAuthenticationSuccess------");
        //httpServletResponse.sendRedirect("/res/index.html");
        response.getWriter().write(JSON.toJSONString(ApiResult.ok()));
    }
}
