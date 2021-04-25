package com.feiji.algorithm.webalgorithmstarter.mapper;

import com.feiji.algorithm.webalgorithmstarter.pojo.MyUserDetails;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface MyUserDetailsServiceMapper {
    //根据userID查询用户信息
    @Select("SELECT username,password,enabled " +
            "FROM sys_user u " +
            "WHERE u.username = #{userId}")
    MyUserDetails findByUserName(@Param("userId") String userId);

    //根据userID查询用户角色
    @Select("SELECT role_code " +
            "FROM sys_role r " +
            "LEFT JOIN sys_user_role ur ON r.id = ur.role_id " +
            "LEFT JOIN sys_user u ON u.id = ur.user_id " +
            "WHERE u.username = #{userId} ")
    List<String> findRoleByUserName(@Param("userId") String userId);


    //根据用户角色查询用户权限
    @Select({
            "<script>" ,
            "SELECT url " ,
            "FROM sys_menu m " ,
            "LEFT JOIN sys_role_menu rm ON m.id = rm.menu_id " ,
            "LEFT JOIN sys_role r ON r.id = rm.role_id ",
            "WHERE r.role_code IN ",
            "<foreach collection='roleCodes' item='roleCode' open='(' separator=',' close=')'> ",
            "#{roleCode}",
            "</foreach> ",
            "</script> "
    })
    List<String> findAuthorityByRoleCodes(@Param("roleCodes") List<String> roleCodes);

}
