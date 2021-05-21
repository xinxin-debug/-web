package com.feiji.algorithm.webalgorithmstarter.service;

import com.feiji.algorithm.webalgorithmstarter.mapper.MyUserDetailsServiceMapper;
import com.feiji.algorithm.webalgorithmstarter.pojo.MyUserDetails;
import lombok.ToString;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

/**
 * 具体实现用户登陆逻辑，
 */
@Component
public class MyUserDetailsService implements UserDetailsService {

    @Resource
    private MyUserDetailsServiceMapper myUserDetailsServiceMapper;

    @Override
    public UserDetails loadUserByUsername(String username)
            throws UsernameNotFoundException {

        //获得用户信息
        MyUserDetails myUserDetails =
                myUserDetailsServiceMapper.findByUserName(username);

        if(myUserDetails == null){
            throw new UsernameNotFoundException("用户名不存在");
        }

        //获得用户角色列表
        List<String> roleCodes =
                myUserDetailsServiceMapper.findRoleByUserName(username);

        //通过角色列表获取权限列表
        List<String> authorities = new ArrayList<>();
                //myUserDetailsServiceMapper.findAuthorityByRoleCodes(roleCodes);

        //为角色标识加上ROLE_前缀（Spring Security规范）
        roleCodes = roleCodes.stream()
                .map(rc -> "ROLE_" + rc )
                .collect(Collectors.toList());

        //角色是一种特殊的权限，所以合并
        authorities.addAll(roleCodes);
        //转成用逗号分隔的字符串，为用户设置权限标识
        myUserDetails.setAuthorities(
                AuthorityUtils.commaSeparatedStringToAuthorityList(
                        String.join(",",authorities)
                )
        );

        System.out.println(myUserDetails.toString()+"----------");
        return myUserDetails;
    }
}
