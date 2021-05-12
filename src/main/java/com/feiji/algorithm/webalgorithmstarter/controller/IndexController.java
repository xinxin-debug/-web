package com.feiji.algorithm.webalgorithmstarter.controller;

import com.feiji.algorithm.webalgorithmstarter.pojo.CompileParams;
import com.feiji.algorithm.webalgorithmstarter.pojo.CompileResult;
import com.feiji.algorithm.webalgorithmstarter.utils.ApiResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.stereotype.Controller;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Controller
@CrossOrigin("*")
public class IndexController {
    @Autowired
    private RestTemplate restTemplate;

    // 登录
    @PostMapping("/login")
    @ResponseBody
    public ApiResult login(String username, String password, HttpServletResponse response) throws IOException {
        System.out.println("-------------------------");
        return ApiResult.ok();
//        response.sendRedirect("/res/index.html");
    }

    @GetMapping("/")
    public void error(HttpServletResponse response) throws IOException {
        response.sendRedirect("/res/index.html");
    }


    @GetMapping("favicon.ico")
    @ResponseBody
    void returnNoFavicon() {
    }

    //获取编译结果
    @PostMapping("/compile2c")
    @ResponseBody
    public CompileResult compile2c(CompileParams param) {
//        System.out.println(param);
        String url = "https://tool.runoob.com/compile2.php";
        HttpHeaders headers = new HttpHeaders();
//  请勿轻易改变此提交方式，大部分的情况下，提交方式都是表单提交
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
//  封装参数，千万不要替换为Map与HashMap，否则参数无法传递
        MultiValueMap<String, String> params = new LinkedMultiValueMap<String, String>();
//  也支持中文
        params.add("code", param.getCode());
        params.add("token", param.getToken());
        params.add("language", param.getLanguage());
        params.add("fileext", param.getFileext());
        HttpEntity<MultiValueMap<String, String>> requestEntity = new HttpEntity<MultiValueMap<String, String>>(params, headers);
//  执行HTTP请求
        ResponseEntity<CompileResult> response = restTemplate.exchange(url, HttpMethod.POST, requestEntity, CompileResult.class);
//  输出结果
        System.out.println(response.getBody());

        return response.getBody();
    }
}
