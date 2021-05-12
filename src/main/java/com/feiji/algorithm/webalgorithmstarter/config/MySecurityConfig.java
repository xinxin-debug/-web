package com.feiji.algorithm.webalgorithmstarter.config;

import com.feiji.algorithm.webalgorithmstarter.handler.CustomAuthenticationSuccessHandler;
import com.feiji.algorithm.webalgorithmstarter.handler.MyAuthenticationFailHandler;
import com.feiji.algorithm.webalgorithmstarter.service.MyUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.annotation.Resource;

@Configuration
public class MySecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private MyUserDetailsService userDetailsService;

    @Autowired
    private CustomAuthenticationSuccessHandler successHandler;


    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private MyAuthenticationFailHandler failHandler;
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable() //禁用跨站csrf攻击防御
                .formLogin()
                .loginPage("/res/login.html")//一旦用户的请求没有权限就跳转到这个页面
                .loginProcessingUrl("/login")//登录表单form中action的地址，也就是处理认证请求的路径
                .usernameParameter("username")///登录表单form中用户名输入框input的name名，不修改的话默认是username
                .passwordParameter("password")//form中密码输入框input的name名，不修改的话默认是password
                .successHandler(successHandler)
                .failureHandler(failHandler)
                //.defaultSuccessUrl("/res/index.html")//登录认证成功后默认转跳的路径
                .and()
                .authorizeRequests()
                .antMatchers("/res/login.html","/login","/compile2c").permitAll()//不需要通过登录验证就可以被访问的资源路径
                .antMatchers("/","/biz1","/biz2") //资源路径匹配
                .hasAnyAuthority("ROLE_user","ROLE_admin")  //user角色和admin角色都可以访问
                .antMatchers("/syslog","/sysuser")  //资源路径匹配
                .hasAnyRole("admin")  //admin角色可以访问
                //.antMatchers("/syslog").hasAuthority("sys:log")
                //.antMatchers("/sysuser").hasAuthority("sys:user")
                .anyRequest().authenticated();

        http.sessionManagement().invalidSessionUrl("/res/login.html");

        http.sessionManagement()
                .maximumSessions(1)
                .maxSessionsPreventsLogin(false);

        http.rememberMe();
    }


    @Override
    public void configure(AuthenticationManagerBuilder auth) throws Exception {
       /* auth.inMemoryAuthentication()
                .withUser("user")
                .password(passwordEncoder.encode("123456"))
                .roles("user")
                .and()
                .withUser("admin")
                .password(passwordEncoder.encode("123456"))
                //.authorities("sys:log","sys:user")
                .roles("admin")
                .and()
                .passwordEncoder(passwordEncoder);//配置BCrypt加密*/

        auth.userDetailsService(userDetailsService)
                .passwordEncoder(passwordEncoder);
    }

    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Override
    public void configure(WebSecurity web) {
        //将项目中静态资源路径开放出来
        //web.ignoring().antMatchers( "/res/index.js","/res/jquery.js");
        web.ignoring().antMatchers( "/res/favicon.ico","/res/image/logo.png","/res/image/1.jpg",
                "/res/images/*.png","/res/css/*.css");
    }


}

