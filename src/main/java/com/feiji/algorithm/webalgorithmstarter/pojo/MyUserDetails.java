package com.feiji.algorithm.webalgorithmstarter.pojo;

import lombok.ToString;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;


@ToString
public class MyUserDetails implements UserDetails {
    String password;  //密码
    String username;  //用户名
    boolean accountNonExpired;   //是否没过期
    boolean accountNonLocked;   //是否没被锁定
    boolean credentialsNonExpired;  //密码是否没过期
    boolean enabled;  //账号是否可用
    Collection<? extends GrantedAuthority> authorities;  //用户的权限集合


    public void setPassword(String password) {
        this.password = password;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setAccountNonExpired(boolean accountNonExpired) {
        this.accountNonExpired = accountNonExpired;
    }

    public void setAccountNonLocked(boolean accountNonLocked) {
        this.accountNonLocked = accountNonLocked;
    }

    public void setCredentialsNonExpired(boolean credentialsNonExpired) {
        this.credentialsNonExpired = credentialsNonExpired;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }

    public void setAuthorities(Collection<? extends GrantedAuthority> authorities) {
        this.authorities = authorities;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;   //暂时未用到，直接返回true，表示账户未过期
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;   //暂时未用到，直接返回true，表示账户未被锁定
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;   //暂时未用到，直接返回true，表示账户密码未过期
    }

    @Override
    public boolean isEnabled() {
        return enabled;
    }
}
