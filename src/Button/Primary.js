import styled from 'styled-components';

import Base from './Base';

const Primary = styled(Base)`
    color: ${ props => (props.theme.vcnkit && props.theme.vcnkit.primaryColor) || '#5282B5' };
`;

Primary.propTypes = Base.propTypes;

/**
 * Hallo
 */
export default Primary;