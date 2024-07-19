package com.poscodx.kanbanboard.repository;

import com.poscodx.kanbanboard.vo.TaskVo;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class TaskRepository {

    @Autowired
    private SqlSession sqlSession;

    public List<TaskVo> findByCardNo(Long cardNo) {
        return sqlSession.selectList("task.findByCardNo", cardNo);
    }

    public int insert(TaskVo vo) {
        return sqlSession.insert("task.insert", vo);
    }

    public int update(Long no, String done) {
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("no", no);
        map.put("done", done);

        return sqlSession.update("task.update", map);
    }

    public int delete(Long no) {
        return sqlSession.delete("task.delete", no);
    }
}
