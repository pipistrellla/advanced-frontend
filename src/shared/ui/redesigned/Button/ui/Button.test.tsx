import { render, screen } from '@testing-library/react';

import { Button } from './Button';

describe('Button', () => {
    test('Button render test', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('Button render test with clear theme', () => {
        render(<Button variant="clear">TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
});
