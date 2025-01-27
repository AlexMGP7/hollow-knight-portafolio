interface HornetSpriteProps {
    frame: string | null;
    direction: 'left' | 'right';
  }
  
  const HornetSprite: React.FC<HornetSpriteProps> = ({ frame, direction }) => {
    if (!frame) return null;
  
    return (
      <img
        src={`/Hornet/${frame}`}
        alt="Hornet Sprite"
        className="w-32 h-32"
        style={{
          transform: direction === 'left' ? 'scaleX(1)' : 'scaleX(-1)', // Voltear según dirección
        }}
      />
    );
  };
  
  export default HornetSprite;
  