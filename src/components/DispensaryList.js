import React from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import { ThemeProvider } from 'styled-components'
import { H1, MediumP, H4, ScrollContent } from './../styles/components'
import { colors } from './../styles/theme'

const DispensaryList = props => {
  const customConf = {
    mediaQuery: 'only screen',
    columns: {
      xs: 4,
      sm: 8,
      md: 8,
      lg: 12,
      xl: 12,
    },
    gutterWidth: {
      xs: 1,
      sm: 1,
      md: 3,
      lg: 6,
      xl: 6,
    },
    paddingWidth: {
      xs: 1,
      sm: 1,
      md: 3,
      lg: 6,
      xl: 6,
    },
    container: {
      xs: 'full', // 'full' = max-width: 100%
      sm: 'full', // 'full' = max-width: 100%
      md: 'full', // 'full' = max-width: 100%
      lg: 'full', // max-width: 1440px
      xl: 'full', // max-width: 1440px
    },
    breakpoints: {
      xs: 1,
      sm: 48, // 768px
      md: 64, // 1024px
      lg: 90, // 1440px
      xl: 120, // 1920px
    },
  }
  return (
    <ScrollContent height={props.wh}>
      <article>
        <ThemeProvider theme={{ awesomegrid: customConf }}>
          <Container>
            <Row>
              <Col xs={12}>
                <H1 color={colors.blue}>{props.headline}</H1>
              </Col>
              {props.list.map((item, i) =>
                <Col xs={12} sm={12} md={4} lg={4} xl={4} key={`disp-${i}`}>
                  <div className={`inner`}>
                    <H4><a href={`${item.vendor_link}`} target='_blank'>{item.vendor_name}</a></H4>
                    <MediumP>
                      <span className={`address`} dangerouslySetInnerHTML={{ __html: item.vendor_address}}/>
                      <span className={`phone`}>{item.vendor_phone}</span>
                    </MediumP>
                  </div>
                </Col>
              )}
            </Row>
          </Container>
        </ThemeProvider>
      </article>
    </ScrollContent>
  )
}

export default connect(
  state => ({
    wh: state.resizeState.window_height,
    bp: state.resizeState.breakpoints,
  })
)(DispensaryList)
