'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [prompt, setPrompt] = useState('');
  
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: 'sans-serif'
    }}>
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', maxWidth: '600px', width: '100%' }}
      >
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', background: 'linear-gradient(to right, #38bdf8, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          VideoGen Infinity
        </h1>
        <p style={{ opacity: 0.7, marginBottom: '2rem' }}>Créez des mondes infinis avec l'IA.</p>
        
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Décrivez votre vision..."
          style={{
            width: '100%',
            padding: '15px',
            borderRadius: '12px',
            border: '1px solid #334155',
            background: '#0f172a',
            color: 'white',
            fontSize: '1rem',
            marginBottom: '20px'
          }}
        />
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            padding: '15px 40px',
            borderRadius: '50px',
            border: 'none',
            background: 'linear-gradient(to right, #38bdf8, #818cf8)',
            color: 'white',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          Générer l'Infini
        </motion.button>
      </motion.div>
    </div>
  );
}
