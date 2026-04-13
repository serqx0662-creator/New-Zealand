export default function WhyNZSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Заголовок */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold text-gray-900">
            Почему Новая Зеландия?
          </h2>
          <p className="text-black text-base font-normal md:min-w-[891px] mx-auto leading-relaxed overflow-hidden ">
            Современное образование, безопасность и уникальная природа делают Новую Зеландию идеальным выбором.
          </p>
        </div>

        {/*
          Адаптивная bento-grid:
          mobile  → 1 колонка, все карточки в столбик
          md      → 2 колонки
          lg      → 5 колонок × 3 ряда (точно по Figma)
        */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4"
          style={{ gridTemplateRows: "auto" }}
        >

          {/* 1. Безопасная среда — lg: col 1-2, row 1 */}
          <div className="lg:col-span-2 border border-gray-100 rounded-2xl p-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Безопасная и спокойная среда
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Новая Зеландия постоянно входит в число самых безопасных стран мира,
              предлагая стабильное общество и дружелюбную атмосферу для жизни и учёбы.
            </p>
          </div>

          {/* 2. Образование — lg: col 3-5, row 1 */}
          <div className="lg:col-span-3 border border-gray-100 rounded-2xl p-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Образование мирового класса
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Университеты Новой Зеландии признаны во всём мире за инновационные методы
              преподавания, практическое обучение и тесные связи с индустрией.
            </p>
          </div>

          {/* 3. Карьера — lg: col 1-2, row 2-3 (высокая карточка с фото) */}
          <div className="md:row-span-2 lg:col-span-2 lg:row-span-2 border border-gray-100 rounded-2xl p-8 flex flex-col justify-between overflow-hidden min-h-[360px]">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Карьерные и миграционные возможности
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Страна нуждается в квалифицированных и образованных людях — международные
                выпускники поощряются оставаться, получать опыт работы и даже строить
                долгосрочную карьеру через открытые пути работы после учёбы и миграции.
              </p>
            </div>
            <div className="mx-0 -mb-8 md:-mt-19">
              <img
                src="/image/why-nz-people.webp"
                alt="Студенты"
                className="w-full object-cover object-top"
              />
            </div>
          </div>

          {/* 4. Карта мира — lg: col 3, row 2 */}
          <div className="lg:col-span-1 border border-gray-100 rounded-2xl bg-gray-50 flex items-center justify-center p-6 min-h-[180px]">
            <img
              src="/image/why-nz-map.webp"
              alt="Карта мира"
              className="w-full object-contain"
            />
          </div>

          {/* 5. Культура — lg: col 4-5, row 2 */}
          <div className="lg:col-span-2 border border-gray-100 rounded-2xl p-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Открытая и дружелюбная культура
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Киви известны своей добротой, инклюзивностью и уважением к разнообразию.
              Студенты чувствуют себя искренне принятыми и быстро становятся частью сообщества.
            </p>
          </div>

          {/* 6. Качество жизни — lg: col 3-5, row 3 */}
          <div className="md:col-span-2 lg:col-span-3 border border-gray-100 rounded-2xl p-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Качество жизни
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Чистая природа, свежий воздух, сбалансированный образ жизни и отличное
              здравоохранение делают Новую Зеландию одним из лучших мест в мире для жизни,
              учёбы и роста.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
