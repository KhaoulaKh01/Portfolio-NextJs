// ParentComponent.js
const ParentComponent = () => {
  const [showSignIn, setShowSignIn] = useState(true);

  const handleClose = () => {
    setShowSignIn(false);
  };

  return (
    <div>
      {showSignIn && <SignIn onClose={handleClose} />}
    </div>
  );
};

export default ParentComponent;
