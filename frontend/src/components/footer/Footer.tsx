import React, { CSSProperties } from "react";

const Footer: React.FC = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p style={styles.text}>Made with ❤️ by Me</p>
        <p style={styles.subText}>
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

const styles: { [key: string]: CSSProperties } = {
  footer: {
    background: "linear-gradient(to bottom, rgba(0, 77, 0, 0), #004d00)", // Gradient from transparent to dark green
    color: "#f1f1f1", // Light text color for contrast
    padding: "20px 0", // Vertical padding
    textAlign: "center", // Centered text
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", // Slightly darker shadow effect
  },
  container: {
    maxWidth: "1200px", // Max width for container
    margin: "0 auto", // Center container horizontally
    padding: "0 20px", // Horizontal padding
  },
  text: {
    margin: "0", // Remove default margin
    fontSize: "16px", // Font size
  },
  subText: {
    margin: "10px 0 0", // Margin top and bottom
    fontSize: "14px", // Smaller font size
    color: "#e0e0e0", // Slightly lighter text color for contrast
  },
};

export default Footer;
