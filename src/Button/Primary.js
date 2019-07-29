import styled from 'styled-components';

import Base from './Base';

export default styled(Base)`
    color: ${ props => (props.theme.vcnkit && props.theme.vcnkit.primaryColor) || '#5282B5' };
`;
