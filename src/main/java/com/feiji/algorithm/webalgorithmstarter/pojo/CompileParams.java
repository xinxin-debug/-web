package com.feiji.algorithm.webalgorithmstarter.pojo;

import lombok.Data;

/**
 * 保存提交的代码的信息
 */
@Data
public class CompileParams {
    private String code;
    private String token;
    private String language;
    private String fileext;
}
