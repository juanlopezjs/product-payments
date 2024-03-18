import React from 'react';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import ImageProduct from './index';

describe('ImageProduct', () => {
    test('debe mostrar la imagen con la URL proporcionada', () => {
      const url = 'https://example.com/image.jpg';
      render(<ImageProduct url={url} />);
      const image = screen.getByAltText('Product Image');
  
      expect(image).toHaveAttribute('src', url);
    });
  });