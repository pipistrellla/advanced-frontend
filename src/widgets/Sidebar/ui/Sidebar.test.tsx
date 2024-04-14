import { fireEvent, screen } from '@testing-library/react';
import { ComponentRender } from 'shared/lib/tests/ComponentRender/ComponentRender';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {

    test('Sidebar render test', () => {

        ComponentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();

    });

    test('Sidebar toggle', () => {

        ComponentRender(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebarToggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(expect(screen.getByTestId('sidebar')).toHaveClass('collapsed'));

    });

});
