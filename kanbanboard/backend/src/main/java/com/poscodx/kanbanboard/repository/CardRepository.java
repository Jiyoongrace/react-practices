package com.poscodx.kanbanboard.repository;

import com.poscodx.kanbanboard.vo.CardVo;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CardRepository {

    @Autowired
    private SqlSession sqlSession;

    public List<CardVo> findAll() {
        return sqlSession.selectList("card.findAll");
    }
}
