package com.feiji.algorithm.webalgorithmstarter.utils;
import lombok.Data;

import java.util.HashMap;
import java.util.Map;

/**
 * 接口信息统一返回格式
 */
@Data
public class ApiResult {
    private Boolean success;
    private Integer code;
    private String message;
    private Map<String, Object> data = new HashMap<String, Object>();

    private ApiResult() {
    }

    public static ApiResult ok() {
        ApiResult r = new ApiResult();
        r.setSuccess(true);
        r.setCode(ResultCode.SUCCESS);
        r.setMessage("成功");
        return r;
    }

    public static ApiResult error() {
        ApiResult r = new ApiResult();
        r.setSuccess(false);
        r.setCode(ResultCode.ERROR);
        r.setMessage("失败");
        return r;
    }

    public ApiResult success(Boolean success) {
        this.setSuccess(success);
        return this;
    }

    public ApiResult message(String message) {
        this.setMessage(message);
        return this;
    }

    public ApiResult code(Integer code) {
        this.setCode(code);
        return this;
    }

    public ApiResult data(String key, Object value) {
        this.data.put(key, value);
        return this;
    }

    public ApiResult data(Map<String, Object> map) {
        this.setData(map);
        return this;
    }


}
