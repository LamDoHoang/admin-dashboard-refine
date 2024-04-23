import { DashboardDealChart, UpcomingEvents } from '@/components'
import { Col, Row } from 'antd'
import React from 'react'

export const Home = () => {
  return (
    <div>
      <Row gutter={[32, 32]}>
        <Col xs={24} sm={24} xl={8}>
          
        </Col>
        <Col xs={24} sm={24} xl={8}>

        </Col>
        <Col xs={24} sm={24} xl={8}>

        </Col>
      </Row>
      <Row
        gutter={[32, 32]}
        style={{
          marginTop: '32px'
        }}
      >
        <Col
          xs={24}
          sm={24}
          xl={8}
          style={{
            height: '460px'
          }}
        >
          <UpcomingEvents />
        </Col>

        <Col
          xs={24}
          sm={24}
          xl={16}
          style={{
            height: '460px'
          }}
        >
          <DashboardDealChart />
        </Col>
      </Row>
    </div>
  )
}