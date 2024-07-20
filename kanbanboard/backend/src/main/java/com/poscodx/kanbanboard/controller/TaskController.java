package com.poscodx.kanbanboard.controller;

import com.poscodx.kanbanboard.dto.JsonResult;
import com.poscodx.kanbanboard.repository.TaskRepository;
import com.poscodx.kanbanboard.vo.TaskVo;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;


@Slf4j
@RestController
@RequestMapping("/api/task")
public class TaskController {

    @Autowired
    private TaskRepository taskRepository;

    @GetMapping
    public ResponseEntity<JsonResult> read(
            @RequestParam(value = "no", required = true) Long cardNo) {

        log.info("Request[GET / api]: " + cardNo);

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(JsonResult.success(taskRepository.findByCardNo(cardNo)));
    }

    @PostMapping
    public ResponseEntity<JsonResult> create(@RequestBody TaskVo vo) {

        log.info("Request[POST / api]: {}", vo);

        taskRepository.insert(vo);

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(JsonResult.success(vo));
    }

    @PutMapping("/{no}")
    public ResponseEntity<JsonResult> update(
            @PathVariable(value = "no") Long no, String done) {

        log.info("Request[PUT / api/{}]: {}", no, done);

        taskRepository.update(no, done);

        Map<String, Object> responseMap = new HashMap<>();
        responseMap.put("no", no);
        responseMap.put("done", done);

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(JsonResult.success(responseMap));
    }

    @DeleteMapping("/{no}")
    public ResponseEntity<JsonResult> delete(
            @PathVariable(value = "no", required = true) Long no) {

        log.info("Request[DELETE / api/{}]", no);

        taskRepository.delete(no);

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(JsonResult.success(no));
    }
}
