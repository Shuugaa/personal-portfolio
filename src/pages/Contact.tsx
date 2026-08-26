const Contact: React.FC = () => (
  <div className="max-w-xl">
    <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
    <p className="mt-5 text-neutral-600 dark:text-neutral-400 leading-relaxed">
      Plugin, mission, ou une question : un mail suffit.
    </p>
    <a
      href="mailto:contact@shuudev.com"
      className="mt-8 inline-flex items-center rounded-md bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-medium px-4 py-2.5 hover:opacity-90"
    >
      contact@shuudev.com
    </a>
    <p className="mt-10 text-sm text-neutral-500">
      Code :{' '}
      <a
        href="https://github.com/Shuugaa"
        className="underline underline-offset-2 hover:text-neutral-800 dark:hover:text-neutral-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        github.com/Shuugaa
      </a>
    </p>
  </div>
);

export default Contact;
