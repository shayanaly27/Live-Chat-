export default function Tip() {
  return (
    <p className="text-sm text-gray-500">
      Tip: Some customers may not be shown because your plan has a 400 customers tracking limit.{" "}
      <a href="#" className="text-violet-500 hover:text-violet-700 font-medium transition-colors">
        Upgrade to see more customers
      </a>
    </p>
  );
}