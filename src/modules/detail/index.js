import React from 'react';
import { withRouter } from 'react-router';
import { get } from 'lodash';
import styled from 'styled-components';

import { LoadingScreen } from '../../components/loading';
import { Container, Row, Col } from '../../components/grid';
import api from '../../utils/api';
import { Height, RenderImage, Weight } from '../../utils/formatter/index';
import { Statistic } from './components';

const Detail = ({ match }) => {
  const pokemonId = get(match, 'params.pokemonId', '');
  const [data, setData] = React.useState();

  React.useEffect(() => {
    api(`/pokemon/${pokemonId}`).then((response) => setData(response));
  }, [match]);

  if (data) {
    const { id, name, stats, height, weight, abilities, types } = data;
    return (
      <Section>
        <Container>
          <Row>
            <Col col={12}>
              {/* <div onClick={() => history.go(-1)}>Back</div> */}
              <Title>{name}</Title>
            </Col>
          </Row>
          <Row>
            <Col col={6}>
              <ImageDetail src={RenderImage(id)} alt={name} />
              <Row>
                <Col col={6}>
                  <TitleAttribute>Height</TitleAttribute>
                  <DetailAttribute>{Height(height)}</DetailAttribute>
                </Col>
                <Col col={6}>
                  <TitleAttribute>Weight</TitleAttribute>
                  <DetailAttribute>{Weight(weight)}</DetailAttribute>
                </Col>
                <Col col={6}>
                  <TitleAttribute>Abilities</TitleAttribute>
                  <DetailAttribute>
                    {abilities
                      .sort((a, b) => a.slot - b.slot)
                      .filter((item) => !item.is_hidden)
                      .map((item) => item.ability.name)
                      .join(', ')}
                  </DetailAttribute>
                </Col>
                <Col col={6}>
                  <TitleAttribute>Types</TitleAttribute>
                  <DetailAttribute>
                    {types
                      .sort((a, b) => a.slot - b.slot)
                      .map((item) => item.type.name)
                      .join(', ')}
                  </DetailAttribute>
                </Col>
              </Row>
            </Col>
            <Col col={6}>
              <TitleAttribute>Statistic</TitleAttribute>
              <Statistic data={stats} />
            </Col>
          </Row>
        </Container>
      </Section>
    );
  }

  return <LoadingScreen />;
};

const Section = styled('div')`
  padding: 80px 0;
`;

const Title = styled('h3')`
  font-weight: bold;
  font-size: 36px;
  line-height: 44px;
  margin-bottom: 32px;
  text-transform: capitalize;
`;

const TitleAttribute = styled('h4')`
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  font-weight: bold;
`;

const DetailAttribute = styled('p')`
  margin: auto auto 24px;
`;

const ImageDetail = styled('img')`
  margin: auto auto 32px;
`;

export default withRouter(Detail);
