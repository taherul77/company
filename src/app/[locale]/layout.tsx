import type { Metadata } from "next";
import "../globals.css";
import { NextIntlClientProvider, useMessages } from "next-intl";

export const metadata: Metadata = {
	title: "ATI LIMITED",
	description: "ATI LIMITED",
};

export default function LocaleLayout({
	children,
	params: { locale },
}: {
	children: React.ReactNode;
	params: { locale: string };
}) {
	const messages = useMessages();

	return (
		<html lang={locale}>
			<body className="max-w-screen  overflow-x-hidden">
				<NextIntlClientProvider messages={messages}>
					{children}
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
