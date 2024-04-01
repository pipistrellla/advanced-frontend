import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslations } from 'shared/config/i18n/tests/renderWithTranslations/renderWithTranslations';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {

    test('Sidebar render test', () => {

        renderWithTranslations(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();

    });

    test('Sidebar toggle', () => {

        renderWithTranslations(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebarToggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(expect(screen.getByTestId('sidebar')).toHaveClass('collapsed'));

    });


});
