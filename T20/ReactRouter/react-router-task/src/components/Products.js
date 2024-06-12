import React, { useState, useContext } from 'react';
import { Card, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import { TotalPriceContext } from './TotalPriceContext';
import TotalPrice from './TotalPriceComponent';
import aero from '../Ressources/AeroGlowSunglasses.jpg'
import humbrella from '../Ressources/Hyperloop umberella.jpg'
import lumina from '../Ressources/LuminaTiles.jpg'
import nanoSprout from '../Ressources/Nano sprout.jpg'
import NeuralinkHead from '../Ressources/NeuraLink Headband.jpg'
import Nexa from '../Ressources/Nexa Hive drone.jpg'
import QuantumBottle from '../Ressources/Quantum quench water bottle.jpg'
import QuantumQuill from '../Ressources/Quantum quill.jpg'
import VirtuWall from '../Ressources/Virtuwall wallpaper.jpg'


/**Array of products */
const products = [
    { id: 1, title: 'AeroGlow Sunglasses', description: 'These sleek shades feature built-in LED strips that illuminate the frames, creating a futuristic glow effect. Perfect for fashion-forward tech enthusiasts', price: 29.99, colors: ['Black', 'Red', 'Blue'], image: aero },
    { id: 2, title: 'Quantum Quill', description: 'A smart pen that syncs with your digital devices, allowing you to seamlessly switch between handwritten notes and digital text. Its ink never runs out, thanks to quantum ink technology.', price: 39.99, colors: ['Black', 'Red', 'Blue'], image: QuantumQuill },
    { id: 3, title: 'NexaHive Drone', description: 'A compact drone with modular attachments—think mini cargo containers, surveillance cameras, or even a tiny greenhouse. Ideal for urban farming or last-mile delivery.', price: 39.99, colors: ['Black', 'Red', 'Blue'], image: Nexa },
    { id: 4, title: 'LuminaTiles', description: 'These customizable light-emitting tiles can transform any surface into a dynamic display. Use them for interactive floors, walls, or even furniture.', price: 39.99, colors: ['Black', 'Red', 'Blue'], image: lumina },
    { id: 5, title: 'HyperLoop Umbrella', description: ' An umbrella with a retractable aerodynamic shell. It not only shields you from rain but also converts wind energy into a portable power source for your devices.', price: 39.99, colors: ['Black', 'Red', 'Blue'], image: humbrella },
    { id: 6, title: 'NeuraLink Headband', description: 'Enhance your cognitive abilities with this neural interface headband. It connects to your brain, providing real-time data visualization and personalized insights.', price: 39.99, colors: ['Black', 'Red', 'Blue'], image: NeuralinkHead },
    { id: 7, title: 'NanoSprout Hydroponics', description: 'A compact, self-contained hydroponic system for growing fresh herbs and microgreens indoors. Perfect for urban dwellers with limited space.', price: 39.99, colors: ['Black', 'Red', 'Blue'], image: nanoSprout },
    { id: 8, title: 'VirtuWall Wallpaper', description: 'Transform any room instantly with this interactive wallpaper. It displays moving patterns, reacts to touch, and even lets you change the scenery with a voice command.', price: 39.99, colors: ['Black', 'Red', 'Blue'], image: VirtuWall },
    { id: 9, title: 'QuantumQuench Water Bottle', description: 'A self-cooling water bottle that uses quantum thermodynamics to keep your drink icy cold without any external power source.', price: 39.99, colors: ['Black', 'Red', 'Blue'], image: QuantumBottle },

];


/**Component for products page with bootstrap card for each product with handlebuy function as prop for total price hook  */
export default function Products() {
    const [selectedColors, setSelectedColors] = useState({});
    const { handleBuy, showTotal, totalPrice } = useContext(TotalPriceContext)
    /**Handle to set the selected color */
    const handleColorSelect = (productId, color) => {
        setSelectedColors({ ...selectedColors, [productId]: color });
    };

    return (
        <div>
            <div className="d-flex flex-wrap justify-content-around">
                {products.map((product) => (
                    <Card key={product.id} style={{ width: '18rem', margin: '10px' }}>
                        <Card.Img variant="top" src={product.image} />
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text>{product.description}</Card.Text>
                            <Card.Text><strong>£{product.price}</strong></Card.Text>
                            <DropdownButton
                                id={`dropdown-${product.id}`}
                                title={selectedColors[product.id] || 'Select Color'}
                                onSelect={(color) => handleColorSelect(product.id, color)}
                            >
                                {product.colors.map((color) => (
                                    <Dropdown.Item eventKey={color} key={color}>{color}</Dropdown.Item>
                                ))}
                            </DropdownButton>
                            <Button variant="secondary" onClick={() => handleBuy(product.price)} className="mt-2">Buy</Button>
                        </Card.Body>
                    </Card>
                ))}
                {showTotal && (
                    <TotalPrice totalPrice={totalPrice} />
                )}
            </div>
        </div>

    );
}

