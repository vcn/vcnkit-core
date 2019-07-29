import styled from 'styled-components';

export default styled.div`
    display:         flex;
    justify-content: flex-end;

    min-height: 3.25rem;
    box-sizing: border-box;
    padding:    .5rem 1rem .5rem 1.5rem;

    & > * {
        margin: 0 0 0 .5rem;
    }
`;
