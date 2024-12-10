import React from 'react';
import styled from 'styled-components';
import "../styles/Menulist.css";
import img1 from '../drinksimg.png';

const MenuContainer = styled.div`
  background-color: transparent;
  color: white;
  padding: 20px;
  font-family: 'Arial', sans-serif;
  max-width: 800px;
  margin: 0 auto;
  border: 1px solid white;
  border-radius: 5px;
  position: relative;
`;

const Header = styled.h2`
  text-align: center;
  font-size: 2rem;
  color: #fff;
  margin-bottom: 20px;
`;

const DrinkGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Stack drinks in a single column on mobile */
  }
`;

const DrinkCard = styled.div`
  padding: 10px;
  border-radius: 5px;
`;

const DrinkItem = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  padding: 5px 0;
  align-items: baseline;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack drink name and price vertically on mobile */
  }
`;

const DrinkName = styled.span`
  font-weight: bold;
  letter-spacing: 1px;
  flex: 1;
`;

const DrinkPrice = styled.span`
  font-weight: bold;
  white-space: nowrap;

  @media (max-width: 768px) {
    align-self: flex-end; /* Align the price at the end on mobile */
  }
`;

const DrinkDescription = styled.p`
  font-size: 0.8rem;
  margin-top: -3px;
  color: #d3d3d3;
  font-family: 'Kelly Slab', cursive;
`;

const categoryImages = [
  { imageUrl1: 'https://png.pngtree.com/png-vector/20240327/ourlarge/pngtree-glass-teapot-with-loose-tea-leaves-and-coffee-beans-png-image_12241668.png', imageUrl2: "https://w7.pngwing.com/pngs/734/980/png-transparent-filled-lemon-juice-illustration-orange-juice-lemonade-grapefruit-juice-juice-drinks-food-orange-citrus.png" },
  { imageUrl1: 'https://www.shutterstock.com/image-vector/hookah-vector-logo-design-on-260nw-1564155655.jpg', imageUrl2: img1 },
];

const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * categoryImages.length);
  return categoryImages[randomIndex];
};

const DrinkMenu = ({ category }) => {
  if (!category) {
    return <div></div>;
  }

  const categoryImage = getRandomImage();

  return (
    <div className='menudiv'>
      <MenuContainer>
        {categoryImage && (
          <div style={{ position: "absolute", width: "70px", height: "70px", top: "-10px", left: "-10px" }}>
            <img src={categoryImage.imageUrl1} alt={`${category.name} Deco`} style={{ height: "75px", width: "75px" }} />
          </div>
        )}

        <div style={{ position: "absolute", width: "70px", height: "70px", bottom: "-10px", right: "-10px" }}>
          <img src={categoryImage.imageUrl2} alt={`${category.name} Decoration`} style={{ height: "75px", width: "75px" }} />
        </div>

        <div style={{ display: "flex", width: "100%", alignItems: "center", justifyContent: "center" }}>
          <div style={{ border: "1px solid #fff", width: "15%", height: "0px", marginRight: "15px" }}></div>
          <Header>{category.name} Menu</Header>
          <div style={{ border: "1px solid #fff", width: "15%", height: "0px", marginLeft: "15px" }}></div>
        </div>

        <DrinkGrid>
          {category.items && category.items.length > 0 ? (
            category.items.map((item) => (
              <DrinkCard key={item._id}>
                <DrinkItem>
                  <DrinkName>{item.name}</DrinkName>
                  <DrinkPrice>${item.price}</DrinkPrice>
                </DrinkItem>
                <DrinkDescription>{item.description}</DrinkDescription>
              </DrinkCard>
            ))
          ) : (
            <p>No items available</p>
          )}
        </DrinkGrid>
      </MenuContainer>
    </div>
  );
};

export default DrinkMenu;
