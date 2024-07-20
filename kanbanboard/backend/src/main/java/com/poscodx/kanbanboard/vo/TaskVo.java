package com.poscodx.kanbanboard.vo;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class TaskVo {
    private Long no;
    private String name;
    private String done;
    private String description;
    private Long cardNo;
}
