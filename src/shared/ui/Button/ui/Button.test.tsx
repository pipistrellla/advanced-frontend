import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from './Button';

describe('Button', () => {

    test('Button render test', () => {

        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();

    });

    test('Button render test with clear theme', () => {

        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();

    });

});
