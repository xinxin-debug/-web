package com.feiji.algorithm.webalgorithmstarter.Interceptor;

import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 */
public class GlobalInterceptor implements HandlerInterceptor {
    @Override
    public boolean preHandle(
            HttpServletRequest request,
            HttpServletResponse response, Object handler) throws Exception {
        System.out.println(request.getRequestURL() +"-------------------");
        System.out.println(request.getMethod() +"-------------------");
        return true;
    }
}
