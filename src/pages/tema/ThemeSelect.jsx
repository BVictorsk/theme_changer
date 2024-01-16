import React from 'react'
import styled from '@emotion/styled';

const ThemeContainer = styled.div`
    background-color: ${props => props.theme.palette.background.main};    ;
    flex: 20;
    height: 100vh;
    transition: all 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CardsContainer = styled.div`    ;
    width: 80%;
    height: 85vh;
    transition: all 0.3s;
    display: flex;
    flex-direction: row;
    gap: 5rem;
    flex-wrap: wrap;
`;

const CardsThemeSelector = styled.div`
    background-color: ${props => props.theme.palette.background.card};    ;
    width: 45%;
    height: 47%;
    transition: all 0.1s;
    border-radius: .5rem;
    border: 1px solid ${props => props.theme.palette.border.primary};  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    gap: 1rem;
    
    &:hover {
      border: 3px solid ${props => props.theme.palette.border.secondary};
    }
`;

const AuroraPreviewContainer = styled.div`
    background-color: ${props => props.theme.palette.background.card};    
    width: 45%;
    height: 40%;
    border-radius: .3rem;
    border: 1px solid ${props => props.theme.palette.border.primary};    
    transition: all 0.3s;
    display: flex;
    flex-direction: row;

    .theme-colors {
      flex: 1;
      height: 100%;
    }

    #aurora1 {
      background-color: ${props => props.theme.palette.background.temaAurora1};
    }
    #aurora2 {
      background-color: ${props => props.theme.palette.background.temaAurora2};
    }
    #aurora3 {
      background-color: ${props => props.theme.palette.background.temaAurora3};
    }
    #aurora4 {
      background-color: ${props => props.theme.palette.background.temaAurora4};
    }
    #aurora5 {
      background-color: ${props => props.theme.palette.background.temaAurora5};
    }

    #aurora1, #aurora2, #aurora3, #aurora4, #aurora5 {
      &:hover{
        flex-grow: 3;
        height: 110%;
        margin-top: -.5rem;
        border-radius: 1rem;
        border: 1px solid ${props => props.theme.palette.border.secondary};
      }    
    }
`;

const DeepPreviewContainer = styled.div`
    background-color: ${props => props.theme.palette.background.card};    
    width: 45%;
    height: 40%;
    border-radius: .3rem;
    border: 1px solid ${props => props.theme.palette.border.primary};    
    transition: all 0.3s;
    display: flex;
    flex-direction: row;

    .theme-colors {
      flex: 1;
      height: 100%;
    }

    #DO1 {
      background-color: ${props => props.theme.palette.background.temaDO1};
    }
    #DO2 {
      background-color: ${props => props.theme.palette.background.temaDO2};
    }
    #DO3 {
      background-color: ${props => props.theme.palette.background.temaDO3};
    }
    #DO4 {
      background-color: ${props => props.theme.palette.background.temaDO4};
    }
    #DO5 {
      background-color: ${props => props.theme.palette.background.temaDO5};
    }

    #DO1, #DO2, #DO3, #DO4, #DO5 {
      &:hover{
        flex-grow: 3;
        height: 110%;
        margin-top: -.5rem;
        border-radius: 1rem;
        border: 1px solid ${props => props.theme.palette.border.secondary};
      }    
    }
`;

const UrbanPreviewContainer = styled.div`
    background-color: ${props => props.theme.palette.background.card};    
    width: 45%;
    height: 40%;
    border-radius: .3rem;
    border: 1px solid ${props => props.theme.palette.border.primary};    
    transition: all 0.3s;
    display: flex;
    flex-direction: row;

    .theme-colors {
      flex: 1;
      height: 100%;
    }

    #urban1 {
      background-color: ${props => props.theme.palette.background.temaurban1};
    }
    #urban2 {
      background-color: ${props => props.theme.palette.background.temaurban2};
    }
    #urban3 {
      background-color: ${props => props.theme.palette.background.temaurban3};
    }
    #urban4 {
      background-color: ${props => props.theme.palette.background.temaurban4};
    }
    #urban5 {
      background-color: ${props => props.theme.palette.background.temaurban5};
    }

    #urban1, #urban2, #urban3, #urban4, #urban5 {
      &:hover{
        flex-grow: 3;
        height: 110%;
        margin-top: -.5rem;
        border-radius: 1rem;
        border: 1px solid ${props => props.theme.palette.border.secondary};
      }    
    }
`;

const NightPreviewContainer = styled.div`
    background-color: ${props => props.theme.palette.background.card};    
    width: 45%;
    height: 40%;
    border-radius: .3rem;
    border: 1px solid ${props => props.theme.palette.border.primary};    
    transition: all 0.3s;
    display: flex;
    flex-direction: row;

    .theme-colors {
      flex: 1;
      height: 100%;
    }

    #night1 {
      background-color: ${props => props.theme.palette.background.temanight1};
    }
    #night2 {
      background-color: ${props => props.theme.palette.background.temanight2};
    }
    #night3 {
      background-color: ${props => props.theme.palette.background.temanight3};
    }
    #night4 {
      background-color: ${props => props.theme.palette.background.temanight4};
    }
    #night5 {
      background-color: ${props => props.theme.palette.background.temanight5};
    }

    #night1, #night2, #night3, #night4, #night5 {
      &:hover{
        flex-grow: 3;
        height: 110%;
        margin-top: -.5rem;
        border-radius: 1rem;
        border: 1px solid ${props => props.theme.palette.border.secondary};
      }    
    }
`;

const ButtonContainer = styled.button`
    background-color: ${props => props.theme.palette.background.button};    
    width: 10rem;
    height: 4rem;
    border-radius: 1rem;
    transition: all 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    color:  ${props => props.theme.palette.txt.black};    

    &:hover {
      background-color: ${props => props.theme.palette.background.buttonHover};    
      width: 15rem;
      color:  ${props => props.theme.palette.txt.white};  
    }
`;


const ThemeSelect = () => {
  return (
    <ThemeContainer>
      <CardsContainer>
        <CardsThemeSelector>
          <AuroraPreviewContainer>
            <div className="theme-colors" id="aurora1"></div>
            <div className="theme-colors" id="aurora2"></div>
            <div className="theme-colors" id="aurora3"></div>
            <div className="theme-colors" id="aurora4"></div>
            <div className="theme-colors" id="aurora5"></div>
          </AuroraPreviewContainer>
          <ButtonContainer>Alterar Tema</ButtonContainer>
        </CardsThemeSelector>
        <CardsThemeSelector>
          <DeepPreviewContainer>
            <div className="theme-colors" id="DO1"></div>
            <div className="theme-colors" id="DO2"></div>
            <div className="theme-colors" id="DO3"></div>
            <div className="theme-colors" id="DO4"></div>
            <div className="theme-colors" id="DO5"></div>
          </DeepPreviewContainer>
          <ButtonContainer>Alterar Tema</ButtonContainer>
        </CardsThemeSelector>
        <CardsThemeSelector>
          <UrbanPreviewContainer>
            <div className="theme-colors" id="urban1"></div>
            <div className="theme-colors" id="urban2"></div>
            <div className="theme-colors" id="urban3"></div>
            <div className="theme-colors" id="urban4"></div>
            <div className="theme-colors" id="urban5"></div>
          </UrbanPreviewContainer>
          <ButtonContainer>Alterar Tema</ButtonContainer>
        </CardsThemeSelector>
        <CardsThemeSelector>
          <NightPreviewContainer>
            <div className="theme-colors" id="night1"></div>
            <div className="theme-colors" id="night2"></div>
            <div className="theme-colors" id="night3"></div>
            <div className="theme-colors" id="night4"></div>
            <div className="theme-colors" id="night5"></div>
          </NightPreviewContainer>
          <ButtonContainer>Alterar Tema</ButtonContainer>
        </CardsThemeSelector>
      </CardsContainer>
    </ThemeContainer>
  )
}

export default ThemeSelect