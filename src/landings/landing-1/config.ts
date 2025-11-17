import type { BenefitCardConfig } from "@shared/types/benefits-card-types";

export const benefits: string = "Наші Переваги";
export const benefitTitle: string = "Чому вибирають нас?";
export const benefitsDescription: string =
	"Ми пропонуємо комплексне рішення, яке поєднує інновацію, надійність та простоту використання для максимального результату вашого бізнесу.";
export const benefitsCards: BenefitCardConfig[] = [
	{
		icon: "lightning",
		title: "Висока Швидкість",
		description:
			"Наші рішення оптимізовані для максимальної продуктивності та миттєвої обробки даних.",
	},
	{
		icon: "shield",
		title: "Надійна Безпека",
		description:
			"Гарантуємо повний захист ваших даних за допомогою передових протоколів шифрування.",
	},
	{
		icon: "scale",
		title: "Легка Масштабованість",
		description: "Система легко адаптується до зростання вашого бізнесу, незалежно від обсягів.",
	},
	{
		icon: "display",
		title: "Адаптивний Дизайн",
		description: "Ідеально працює на будь-якому пристрої – від мобільного до десктопа.",
	},
];
export const benefitFooterDescription: string = "Готові розпочати трансформацію вашого бізнесу?";
export const benefitButton: string = "Почати безкоштовний тест";
