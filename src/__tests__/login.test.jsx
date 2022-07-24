import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";


describe('Login Page Test', () => {
    const page = <BrowserRouter><LoginPage /></BrowserRouter>

    it('Have Image on the left', () => {
        render(page);
        const elemet = screen.getByAltText(/banner/i)
        expect(elemet).toBeVisible();
    })

    it('Have Welcome text', () => {
        render(page);
        const elemet = screen.getByRole('heading', { name: 'Masuk', })
        expect(elemet).toBeVisible();
    })

    it('Have label for email input', () => {
        render(page);
        const elemet = screen.getByText(/email/i)
        expect(elemet).toBeVisible();
    })

    it('Have email input', () => {
        render(page);
        const elemet = screen.getByPlaceholderText(/Contoh: johndee@gmail.com/i)
        expect(elemet).toBeVisible();
    })

    it('Have label for Password input', () => {
        render(page);
        const elemet = screen.getByText(/Password/i)
        expect(elemet).toBeVisible();
    })

    it('Have Password input', () => {
        render(page);
        const elemet = screen.getByPlaceholderText('6+ karakter')
        expect(elemet).toBeVisible();
    })

    it('Have Login Button', () => {
        render(page);
        const elemet = screen.getByRole('button', { name: 'Masuk', })
        expect(elemet).toBeVisible();
    })

    it('Have Register Link', () => {
        render(page);
        const span = screen.getByText(/Belum punya akun/i)
        const elemet = screen.getByText(/Daftar disini/i)
        expect(span).toBeVisible();
        expect(elemet).toBeVisible();
    })
});
