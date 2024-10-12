"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";
import {
	Button,
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from "@/components/ui";

export const AuthWrapper = ({ children }: PropsWithChildren) => {
	const pathname = usePathname();
	const isLoginForm = pathname.includes("login");

	return (
		<div className="flex h-full items-center justify-center">
			<Card>
				<CardHeader>
					<CardTitle>
						<Image
							src="images/logo.svg"
							alt="logo"
							width={32}
							height={32}
						/>
						Т - Очередь
					</CardTitle>
					<CardDescription>Кабинет администратора</CardDescription>
				</CardHeader>
				<CardContent>{children}</CardContent>
				<CardFooter>
					<Link
						href={isLoginForm ? "register" : "login"}
						className="text-sky-700 hover:underline"
					>
						{isLoginForm ? "Регистрация" : "Вход"}
					</Link>
					<div className="relative">
						<div className="absolute inset-0 flex items-center">
							<span className="w-full border-t" />
						</div>
						<div className="relative flex items-center justify-center">
							<span className="bg-background text-muted-foreground">
								Или
							</span>
						</div>
					</div>

					<Button>Войти как тест админ</Button>
				</CardFooter>
			</Card>
		</div>
	);
};
